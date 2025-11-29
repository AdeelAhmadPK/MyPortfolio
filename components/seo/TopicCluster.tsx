'use client';

import React from 'react';
import Link from 'next/link';

// Koray's Semantic SEO Framework - Topic Cluster Component
// Implements pillar content with supporting cluster pages

export interface ClusterTopic {
  title: string;
  description: string;
  link: string;
  type: 'pillar' | 'cluster' | 'supporting';
  keywords?: string[];
  icon?: React.ReactNode;
}

export interface TopicClusterProps {
  pillarTitle: string;
  pillarDescription: string;
  pillarLink?: string;
  clusters: ClusterTopic[];
  variant?: 'hub' | 'spoke' | 'grid' | 'list' | 'cards';
  accentColor?: string;
  textColor?: string;
  backgroundColor?: string;
}

export function TopicCluster({
  pillarTitle,
  pillarDescription,
  pillarLink,
  clusters,
  variant = 'hub',
  accentColor = '#4F46E5',
  textColor,
  backgroundColor,
}: TopicClusterProps) {
  // Schema for topic cluster (BreadcrumbList-like structure)
  const clusterSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: pillarTitle,
    description: pillarDescription,
    itemListElement: clusters.map((cluster, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: cluster.title,
      description: cluster.description,
      url: cluster.link,
    })),
  };

  return (
    <div
      className={`topic-cluster topic-cluster--${variant}`}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Pillar Content (Hub) - Hidden when used in home page with custom header */}
      {!textColor && (
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border-2"
            style={{ 
              backgroundColor: `${accentColor}20`,
              borderColor: `${accentColor}40`,
            }}
          >
            <svg
              className="w-8 h-8"
              style={{ color: accentColor }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h3
            className="text-2xl md:text-3xl font-bold mb-3"
            itemProp="name"
            style={{ color: textColor || '#111827' }}
          >
            {pillarTitle}
          </h3>
          <p
            className="text-lg max-w-2xl mx-auto mb-6"
            itemProp="description"
            style={{ color: textColor ? `${textColor}BB` : '#6B7280' }}
          >
            {pillarDescription}
          </p>
          {pillarLink && (
            <Link
              href={pillarLink}
              className="inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: accentColor,
                color: '#FFFFFF',
              }}
            >
              Explore {pillarTitle}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>
      )}

      {/* Cluster Topics (Spokes) */}
      {variant === 'hub' && (
        <HubLayout clusters={clusters} accentColor={accentColor} textColor={textColor} />
      )}
      {variant === 'spoke' && (
        <SpokeLayout clusters={clusters} accentColor={accentColor} textColor={textColor} />
      )}
      {(variant === 'grid' || variant === 'cards') && (
        <GridLayout clusters={clusters} accentColor={accentColor} textColor={textColor} />
      )}
      {variant === 'list' && (
        <ListLayout clusters={clusters} accentColor={accentColor} textColor={textColor} />
      )}

      {/* Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clusterSchema) }}
      />
    </div>
  );
}

// Hub Layout - Circular arrangement around pillar
function HubLayout({
  clusters,
  accentColor,
  textColor,
}: {
  clusters: ClusterTopic[];
  accentColor: string;
  textColor?: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clusters.map((cluster, index) => (
        <ClusterCard
          key={index}
          cluster={cluster}
          accentColor={accentColor}
          textColor={textColor}
          index={index}
        />
      ))}
    </div>
  );
}

// Spoke Layout - Linear connections from pillar
function SpokeLayout({
  clusters,
  accentColor,
  textColor,
}: {
  clusters: ClusterTopic[];
  accentColor: string;
  textColor?: string;
}) {
  return (
    <div className="relative">
      {/* Central line */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 hidden md:block"
        style={{ backgroundColor: `${accentColor}30` }}
      />
      <div className="space-y-8">
        {clusters.map((cluster, index) => (
          <div
            key={index}
            className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div className="flex-1">
              <ClusterCard
                cluster={cluster}
                accentColor={accentColor}
                textColor={textColor}
                index={index}
              />
            </div>
            {/* Connector dot */}
            <div
              className="hidden md:flex w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: accentColor }}
            />
            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Grid Layout - Standard card grid
function GridLayout({
  clusters,
  accentColor,
  textColor,
}: {
  clusters: ClusterTopic[];
  accentColor: string;
  textColor?: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {clusters.map((cluster, index) => (
        <ClusterCard
          key={index}
          cluster={cluster}
          accentColor={accentColor}
          textColor={textColor}
          index={index}
          compact
        />
      ))}
    </div>
  );
}

// List Layout - Compact list view
function ListLayout({
  clusters,
  accentColor,
  textColor,
}: {
  clusters: ClusterTopic[];
  accentColor: string;
  textColor?: string;
}) {
  return (
    <div className="divide-y divide-gray-100">
      {clusters.map((cluster, index) => (
        <Link
          key={index}
          href={cluster.link}
          className="flex items-center justify-between py-4 px-4 hover:bg-gray-50 rounded-lg transition-colors group"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <div className="flex items-center gap-4">
            <span
              className="flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold"
              style={{
                backgroundColor: `${accentColor}15`,
                color: accentColor,
              }}
              itemProp="position"
            >
              {index + 1}
            </span>
            <div>
              <h4
                className="font-semibold group-hover:text-blue-600 transition-colors"
                itemProp="name"
                style={{ color: textColor || '#111827' }}
              >
                {cluster.title}
              </h4>
              <p
                className="text-sm"
                itemProp="description"
                style={{ color: textColor ? `${textColor}99` : '#6B7280' }}
              >
                {cluster.description}
              </p>
            </div>
          </div>
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <meta itemProp="url" content={cluster.link} />
        </Link>
      ))}
    </div>
  );
}

// Cluster Card Component
function ClusterCard({
  cluster,
  accentColor,
  textColor,
  index,
  compact = false,
}: {
  cluster: ClusterTopic;
  accentColor: string;
  textColor?: string;
  index: number;
  compact?: boolean;
}) {
  const typeStyles = {
    pillar: { badge: 'Pillar', color: accentColor },
    cluster: { badge: 'Topic', color: '#10B981' },
    supporting: { badge: 'Related', color: '#8B5CF6' },
  };

  const style = typeStyles[cluster.type];

  return (
    <Link
      href={cluster.link}
      className={`block bg-white/5 backdrop-blur-md rounded-2xl border-2 border-slate-700/50 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 group hover:-translate-y-2 ${
        compact ? 'p-4' : 'p-6'
      }`}
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/ListItem"
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border"
          style={{
            backgroundColor: `${style.color}20`,
            borderColor: `${style.color}40`,
            color: style.color === accentColor ? '#06B6D4' : style.color,
          }}
        >
          {style.badge}
        </span>
        <span
          className="text-xs font-bold px-2 py-1 rounded-full"
          style={{ 
            backgroundColor: `${accentColor}20`,
            color: accentColor,
          }}
          itemProp="position"
        >
          #{index + 1}
        </span>
      </div>
      <h4
        className={`font-bold mb-2 group-hover:text-cyan-300 transition-colors ${
          compact ? 'text-sm' : 'text-lg'
        }`}
        itemProp="name"
        style={{ color: textColor || '#FFFFFF' }}
      >
        {cluster.title}
      </h4>
      {!compact && (
        <p
          className="text-sm mb-4 leading-relaxed"
          itemProp="description"
          style={{ color: textColor ? `${textColor}CC` : '#CBD5E1' }}
        >
          {cluster.description}
        </p>
      )}
      {cluster.keywords && cluster.keywords.length > 0 && !compact && (
        <div className="flex flex-wrap gap-1.5">
          {cluster.keywords.slice(0, 3).map((keyword, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg text-xs font-medium border"
              style={{
                backgroundColor: `${accentColor}15`,
                borderColor: `${accentColor}30`,
                color: accentColor,
              }}
            >
              {keyword}
            </span>
          ))}
        </div>
      )}
      <meta itemProp="url" content={cluster.link} />
    </Link>
  );
}

export default TopicCluster;
