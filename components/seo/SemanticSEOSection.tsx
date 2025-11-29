'use client';

import React from 'react';
import Link from 'next/link';

import { FaBuilding, FaCog, FaLightbulb, FaMapMarkerAlt, FaWrench } from 'react-icons/fa';;
// Koray's Semantic SEO Framework - Semantic Section Component
// Implements topic-aligned sections with supporting content clusters

export interface SemanticEntity {
  name: string;
  type: 'service' | 'location' | 'industry' | 'concept' | 'benefit' | 'process';
  description?: string;
  link?: string;
}

export interface SemanticSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  entities?: SemanticEntity[];
  keywords?: string[];
  relatedTopics?: { name: string; link: string }[];
  children?: React.ReactNode;
  variant?: 'default' | 'highlight' | 'card' | 'gradient';
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function SemanticSEOSection({
  id,
  title,
  subtitle,
  description,
  entities = [],
  keywords = [],
  relatedTopics = [],
  children,
  variant = 'default',
  backgroundColor,
  textColor,
  accentColor,
}: SemanticSectionProps) {
  // Generate semantic HTML structure for search engines
  const sectionSchema = {
    '@type': 'WebPageElement',
    name: title,
    description: description,
    keywords: keywords.join(', '),
  };

  const variantStyles = {
    default: 'bg-white',
    highlight: 'bg-gray-50',
    card: 'bg-white shadow-lg rounded-2xl border border-gray-100',
    gradient: 'bg-gradient-to-br from-gray-50 to-white',
  };

  return (
    <section
      id={id}
      className={`py-16 px-4 sm:px-6 lg:px-8 ${!backgroundColor ? variantStyles[variant] : ''}`}
      style={{
        backgroundColor: backgroundColor || undefined,
        color: textColor || undefined,
      }}
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div className="max-w-7xl mx-auto">
        {/* Semantic Header with High-Intent Heading */}
        <header className="text-center mb-12">
          {subtitle && (
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: accentColor ? `${accentColor}20` : '#EEF2FF',
                color: accentColor || '#4F46E5',
              }}
            >
              {subtitle}
            </span>
          )}
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            itemProp="name"
            style={{ color: textColor || '#111827' }}
          >
            {title}
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto"
            itemProp="description"
            style={{ color: textColor ? `${textColor}CC` : '#4B5563' }}
          >
            {description}
          </p>
        </header>

        {/* Entity Tags for Semantic Relationships */}
        {entities.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {entities.map((entity, index) => (
              <EntityTag
                key={index}
                entity={entity}
                accentColor={accentColor}
                textColor={textColor}
              />
            ))}
          </div>
        )}

        {/* Main Content Area */}
        <div className="semantic-content" itemProp="mainContentOfPage">
          {children}
        </div>

        {/* Related Topics for Internal Linking */}
        {relatedTopics.length > 0 && (
          <nav className="mt-12 pt-8 border-t border-gray-200" aria-label="Related topics">
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: textColor ? `${textColor}99` : '#6B7280' }}
            >
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {relatedTopics.map((topic, index) => (
                <Link
                  key={index}
                  href={topic.link}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                  style={{
                    backgroundColor: accentColor ? `${accentColor}15` : '#F3F4F6',
                    color: accentColor || '#374151',
                  }}
                >
                  {topic.name}
                  <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </nav>
        )}

        {/* Hidden Schema Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sectionSchema) }}
        />
      </div>
    </section>
  );
}

// Entity Tag Component for Semantic Relationships
function EntityTag({
  entity,
  accentColor,
  textColor,
}: {
  entity: SemanticEntity;
  accentColor?: string;
  textColor?: string;
}) {
  const typeIcons: Record<SemanticEntity['type'], string> = {
    service: '🔧',
    location: '📍',
    industry: '🏢',
    concept: '💡',
    benefit: '✨',
    process: '⚙️',
  };

  const typeColors: Record<SemanticEntity['type'], string> = {
    service: '#3B82F6',
    location: '#10B981',
    industry: '#8B5CF6',
    concept: '#F59E0B',
    benefit: '#EC4899',
    process: '#6366F1',
  };

  const color = accentColor || typeColors[entity.type];

  const content = (
    <span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
      style={{
        backgroundColor: `${color}15`,
        color: color,
        border: `1px solid ${color}30`,
      }}
      itemProp="mentions"
      itemScope
      itemType={`https://schema.org/${entity.type === 'location' ? 'Place' : 'Thing'}`}
    >
      <span>{typeIcons[entity.type]}</span>
      <span itemProp="name">{entity.name}</span>
    </span>
  );

  if (entity.link) {
    return (
      <Link href={entity.link} className="hover:no-underline">
        {content}
      </Link>
    );
  }

  return content;
}

export default SemanticSEOSection;
