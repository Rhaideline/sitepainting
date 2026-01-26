import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  ArrowRight,
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
} from "lucide-react";
import { blogArticles, businessInfo, getBlogArticleBySlug } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Helper function to render text with bold formatting
function renderWithBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Mass Painters Pro",
    };
  }

  return {
    title: `${article.title} | Mass Painters Pro Blog`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://masspainter.pro/blog/${article.slug}`,
      siteName: "Mass Painters Pro",
      locale: "en_US",
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `https://masspainter.pro/blog/${article.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Mass Painters Pro",
      logo: {
        "@type": "ImageObject",
        url: "https://storage.googleapis.com/msgsndr/npwVVdTpo5dMM8CCSeCT/media/695a97fe6e700e1a414da216.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://masspainter.pro/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

<Header currentPage="blog" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-emerald-600 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-gray-500 hover:text-emerald-600 transition-colors">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-b border-gray-100 py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <User size={24} className="text-emerald-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900">{article.author}</div>
                <div className="text-sm text-gray-500">Painting Expert</div>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors"
              aria-label="Share article"
            >
              <Share2 size={18} />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-emerald max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                    {renderWithBold(paragraph.replace('## ', ''))}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-4">
                    {renderWithBold(paragraph.replace('### ', ''))}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-6">
                    {items.map((item, i) => (
                      <li key={i} className="text-gray-700">
                        {renderWithBold(item.replace('- ', ''))}
                      </li>
                    ))}
                  </ul>
                );
              }
              // Handle numbered lists (1. 2. 3. etc)
              if (/^\d+\.\s/.test(paragraph)) {
                const items = paragraph.split('\n').filter(line => /^\d+\.\s/.test(line));
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-2 my-6">
                    {items.map((item, i) => (
                      <li key={i} className="text-gray-700">
                        {renderWithBold(item.replace(/^\d+\.\s/, ''))}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {renderWithBold(paragraph)}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 bg-gradient-to-br from-[#1C1F2E] to-emerald-900 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Need Professional Painting Help?
            </h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Our expert team is ready to help transform your space with quality craftsmanship and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17743415233"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1C1F2E] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all"
              >
                <Phone size={18} />
                {businessInfo.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                Get Free Estimate
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-900 mb-12">Related Articles</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.slug} href={`/blog/${relatedArticle.slug}`} className="group">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                          {relatedArticle.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {relatedArticle.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <span className="text-emerald-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

<Footer />
    </div>
  );
}
