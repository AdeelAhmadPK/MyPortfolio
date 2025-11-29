'use client';

import React from 'react';
import Link from 'next/link';
import { FaBuilding, FaChartLine, FaCog, FaGlobe, FaIndustry, FaLightbulb, FaLink, FaMapMarkerAlt, FaSearch, FaShoppingCart, FaUser, FaWrench } from 'react-icons/fa';;;;

// Koray's Semantic SEO Framework - Entity Relationship Component
// Implements semantic internal linking based on entity relationships

export interface Entity {
  id: string;
  name: string;
  type: 'service' | 'location' | 'industry' | 'person' | 'organization' | 'concept';
  description?: string;
  link?: string;
  image?: string;
  attributes?: Record<string, string | number>;
}

export interface EntityRelation {
  from: string; // entity id
  to: string; // entity id
  relationship: 'offers' | 'locatedIn' | 'servesArea' | 'relatedTo' | 'partOf' | 'requires' | 'includes';
  strength?: 'strong' | 'medium' | 'weak';
}

export interface EntityRelationshipProps {
  entities: Entity[];
  relations?: EntityRelation[];
  centralEntity?: string; // id of the central/focus entity
  variant?: 'network' | 'cards' | 'list' | 'matrix';
  title?: string;
  description?: string;
  accentColor?: string;
  textColor?: string;
  maxDisplay?: number;
}

export function EntityRelationship({
  entities,
  relations = [],
  centralEntity,
  variant = 'cards',
  title,
  description,
  accentColor = '#4F46E5',
  textColor,
  maxDisplay = 12,
}: EntityRelationshipProps) {
  const displayEntities = entities.slice(0, maxDisplay);
  const central = centralEntity ? entities.find((e) => e.id === centralEntity) : entities[0];

  // Generate Schema.org structured data for entities
  const entitySchema = {
    '@context': 'https://schema.org',
    '@graph': entities.map((entity) => ({
      '@type': getSchemaType(entity.type),
      '@id': entity.id,
      name: entity.name,
      description: entity.description,
      url: entity.link,
      image: entity.image,
    })),
  };

  return (
    <div className="entity-relationship" itemScope itemType="https://schema.org/ItemList">
      {/* Header */}
      {(title || description) && (
        <div className="text-center mb-10">
          {title && (
            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: textColor || '#111827' }}
            >
              {title}
            </h3>
          )}
          {description && (
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: textColor ? `${textColor}BB` : '#6B7280' }}
            >
              {description}
            </p>
          )}
        </div>
      )}

      {/* Entity Display */}
      {variant === 'network' && (
        <NetworkView
          entities={displayEntities}
          relations={relations}
          central={central}
          accentColor={accentColor}
          textColor={textColor}
        />
      )}
      {variant === 'cards' && (
        <CardsView entities={displayEntities} accentColor={accentColor} textColor={textColor} />
      )}
      {variant === 'list' && (
        <ListView entities={displayEntities} accentColor={accentColor} textColor={textColor} />
      )}
      {variant === 'matrix' && (
        <MatrixView
          entities={displayEntities}
          relations={relations}
          accentColor={accentColor}
          textColor={textColor}
        />
      )}

      {/* Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
      />
    </div>
  );
}

// Get Schema.org type from entity type
function getSchemaType(type: Entity['type']): string {
  const typeMap: Record<Entity['type'], string> = {
    service: 'Service',
    location: 'Place',
    industry: 'Organization',
    person: 'Person',
    organization: 'Organization',
    concept: 'Thing',
  };
  return typeMap[type];
}

// Network View - Visual network of connected entities
function NetworkView({
  entities,
  relations,
  central,
  accentColor,
  textColor,
}: {
  entities: Entity[];
  relations: EntityRelation[];
  central?: Entity;
  accentColor: string;
  textColor?: string;
}) {
  return (
    <div className="relative">
      {/* Central Entity */}
      {central && (
        <div className="flex justify-center mb-8">
          <EntityNode
            entity={central}
            accentColor={accentColor}
            textColor={textColor}
            isCenter
          />
        </div>
      )}

      {/* Connected Entities in a radial pattern */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {entities
          .filter((e) => e.id !== central?.id)
          .map((entity, index) => {
            const relation = relations.find(
              (r) =>
                (r.from === central?.id && r.to === entity.id) ||
                (r.to === central?.id && r.from === entity.id)
            );
            return (
              <div key={entity.id} className="relative">
                {/* Connection line indicator */}
                {relation && (
                  <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-0.5 rounded text-xs"
                    style={{
                      backgroundColor: `${accentColor}15`,
                      color: accentColor,
                    }}
                  >
                    {relation.relationship}
                  </div>
                )}
                <EntityNode entity={entity} accentColor={accentColor} textColor={textColor} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

// Cards View - Grid of entity cards
function CardsView({
  entities,
  accentColor,
  textColor,
}: {
  entities: Entity[];
  accentColor: string;
  textColor?: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {entities.map((entity) => (
        <EntityCard key={entity.id} entity={entity} accentColor={accentColor} textColor={textColor} />
      ))}
    </div>
  );
}

// List View - Compact list of entities
function ListView({
  entities,
  accentColor,
  textColor,
}: {
  entities: Entity[];
  accentColor: string;
  textColor?: string;
}) {
  // Group entities by type
  const groupedEntities = entities.reduce(
    (acc, entity) => {
      if (!acc[entity.type]) {
        acc[entity.type] = [];
      }
      acc[entity.type].push(entity);
      return acc;
    },
    {} as Record<string, Entity[]>
  );

  const typeLabels: Record<Entity['type'], string> = {
    service: 'Services',
    location: 'Locations',
    industry: 'Industries',
    person: 'People',
    organization: 'Organizations',
    concept: 'Concepts',
  };

  return (
    <div className="space-y-8">
      {Object.entries(groupedEntities).map(([type, typeEntities]) => (
        <div key={type}>
          <h4
            className="text-sm font-semibold uppercase tracking-wider mb-4"
            style={{ color: textColor ? `${textColor}99` : '#6B7280' }}
          >
            {typeLabels[type as Entity['type']]}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {typeEntities.map((entity) => (
              <EntityListItem
                key={entity.id}
                entity={entity}
                accentColor={accentColor}
                textColor={textColor}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Matrix View - Relationship matrix
function MatrixView({
  entities,
  relations,
  accentColor,
  textColor,
}: {
  entities: Entity[];
  relations: EntityRelation[];
  accentColor: string;
  textColor?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {entities.map((entity) => {
          const relatedCount = relations.filter(
            (r) => r.from === entity.id || r.to === entity.id
          ).length;
          return (
            <div
              key={entity.id}
              className="p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
              style={{
                borderLeftWidth: '4px',
                borderLeftColor: accentColor,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: `${accentColor}15`,
                    color: accentColor,
                  }}
                >
                  {entity.type}
                </span>
                <span
                  className="text-xs"
                  style={{ color: textColor ? `${textColor}66` : '#9CA3AF' }}
                >
                  {relatedCount} connections
                </span>
              </div>
              {entity.link ? (
                <Link
                  href={entity.link}
                  className="font-semibold hover:text-blue-600 transition-colors"
                  style={{ color: textColor || '#111827' }}
                >
                  {entity.name}
                </Link>
              ) : (
                <span className="font-semibold" style={{ color: textColor || '#111827' }}>
                  {entity.name}
                </span>
              )}
              {entity.description && (
                <p
                  className="text-sm mt-1 line-clamp-2"
                  style={{ color: textColor ? `${textColor}99` : '#6B7280' }}
                >
                  {entity.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Entity Node Component (for network view)
function EntityNode({
  entity,
  accentColor,
  textColor,
  isCenter = false,
}: {
  entity: Entity;
  accentColor: string;
  textColor?: string;
  isCenter?: boolean;
}) {
  const typeIcons: Record<Entity['type'], string> = {
    service: '🔧',
    location: '📍',
    industry: '🏢',
    person: '👤',
    organization: '🏛️',
    concept: '💡',
  };

  const content = (
    <div
      className={`flex flex-col items-center p-4 rounded-xl border transition-all hover:shadow-lg ${
        isCenter ? 'scale-110 shadow-lg' : ''
      }`}
      style={{
        backgroundColor: isCenter ? accentColor : '#FFFFFF',
        borderColor: isCenter ? accentColor : '#E5E7EB',
      }}
      itemScope
      itemType={`https://schema.org/${getSchemaType(entity.type)}`}
    >
      <span className={`text-2xl mb-2 ${isCenter ? 'text-3xl' : ''}`}>{typeIcons[entity.type]}</span>
      <span
        className={`font-semibold text-center ${isCenter ? 'text-white' : ''}`}
        itemProp="name"
        style={{ color: isCenter ? '#FFFFFF' : textColor || '#111827' }}
      >
        {entity.name}
      </span>
      <span
        className="text-xs mt-1"
        style={{ color: isCenter ? 'rgba(255,255,255,0.8)' : textColor ? `${textColor}66` : '#9CA3AF' }}
      >
        {entity.type}
      </span>
    </div>
  );

  if (entity.link) {
    return (
      <Link href={entity.link} className="block hover:no-underline">
        {content}
      </Link>
    );
  }

  return content;
}

// Entity Card Component
function EntityCard({
  entity,
  accentColor,
  textColor,
}: {
  entity: Entity;
  accentColor: string;
  textColor?: string;
}) {
  const typeIcons: Record<Entity['type'], React.ReactNode> = {
    service: <FaCog className="w-6 h-6" />,
    location: <FaMapMarkerAlt className="w-6 h-6" />,
    industry: <FaIndustry className="w-6 h-6" />,
    person: <FaUser className="w-6 h-6" />,
    organization: <FaBuilding className="w-6 h-6" />,
    concept: <FaLightbulb className="w-6 h-6" />,
  };

  // Get specific icon based on entity name/id
  const getEntityIcon = (entity: Entity) => {
    const name = entity.name.toLowerCase();
    const id = entity.id.toLowerCase();
    
    if (name.includes('local') || name.includes('seo')) return <FaMapMarkerAlt className="w-6 h-6" />;
    if (name.includes('technical') || id.includes('technical')) return <FaCog className="w-6 h-6" />;
    if (name.includes('content') || id.includes('content')) return <FaLightbulb className="w-6 h-6" />;
    if (name.includes('link') || id.includes('link')) return <FaLink className="w-6 h-6" />;
    if (name.includes('analytics') || id.includes('analytics')) return <FaChartLine className="w-6 h-6" />;
    if (name.includes('conversion') || name.includes('cro') || id.includes('conversion')) return <FaShoppingCart className="w-6 h-6" />;
    if (name.includes('search') || id.includes('search')) return <FaSearch className="w-6 h-6" />;
    if (entity.type === 'location') return <FaMapMarkerAlt className="w-6 h-6" />;
    if (entity.type === 'service') return <FaCog className="w-6 h-6" />;
    if (entity.type === 'industry') return <FaIndustry className="w-6 h-6" />;
    if (entity.type === 'concept') return <FaLightbulb className="w-6 h-6" />;
    
    return typeIcons[entity.type] || <FaGlobe className="w-6 h-6" />;
  };

  // Generate gradient colors based on accent color
  const getGradientColors = (baseColor: string) => {
    // Convert hex to RGB for manipulation
    const hex = baseColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Create lighter variant
    const lightR = Math.min(255, r + 30);
    const lightG = Math.min(255, g + 30);
    const lightB = Math.min(255, b + 30);
    
    return {
      primary: baseColor,
      secondary: `rgb(${lightR}, ${lightG}, ${lightB})`,
    };
  };

  const gradients = getGradientColors(accentColor);
  const entityIcon = getEntityIcon(entity);

  // Determine if we're on a dark background based on textColor
  const isDarkBackground = textColor && (
    textColor.toLowerCase() === '#ffffff' || 
    textColor.toLowerCase() === 'white' ||
    textColor.includes('255, 255, 255') ||
    textColor.includes('rgb(255') ||
    textColor.toLowerCase().includes('#fff')
  );
  
  // Use darker, more visible backgrounds
  const cardBg = isDarkBackground 
    ? 'rgba(30, 41, 59, 0.95)' // Darker slate for better contrast
    : '#FFFFFF'; // Pure white for light backgrounds
  
  const cardTextColor = isDarkBackground ? '#FFFFFF' : '#1E293B';
  const cardDescColor = isDarkBackground ? 'rgba(255, 255, 255, 0.85)' : '#64748B';
  
  const content = (
    <div
      className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
      style={{
        backgroundColor: cardBg,
        border: `2px solid ${isDarkBackground ? `${accentColor}40` : `${accentColor}20`}`,
        boxShadow: isDarkBackground 
          ? `0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 ${accentColor}20`
          : `0 10px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)`,
      }}
      itemScope
      itemType={`https://schema.org/${getSchemaType(entity.type)}`}
    >
      {/* Background gradient pattern */}
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${accentColor}, ${gradients.secondary})`,
        }}
      />

      {/* Animated gradient border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${accentColor}15, ${gradients.secondary}15, ${accentColor}15)`,
        }}
      />

      {/* Decorative accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, ${accentColor}, ${gradients.secondary})`,
        }}
      />

      <div className="relative z-10">
        {/* Icon Container - Black background for visibility */}
        <div className="mb-5">
          <div
            className="relative rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
            style={{
              background: isDarkBackground 
                ? 'linear-gradient(135deg, #1a1a1a, #2d2d2d)'
                : 'linear-gradient(135deg, #0f172a, #1e293b)',
              boxShadow: `0 10px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px ${accentColor}40, inset 0 0 20px ${accentColor}20`,
              width: '72px',
              height: '72px',
              border: `2px solid ${accentColor}30`,
            }}
          >
            {/* Icon with white color - always visible on black background */}
            <div className="text-white drop-shadow-lg">
              {entityIcon}
            </div>
            {/* Animated glow effect with accent color */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 -z-10"
              style={{
                background: `linear-gradient(135deg, ${accentColor}, ${gradients.secondary})`,
              }}
            />
          </div>
        </div>
        
        {/* Type Badge */}
        <div className="mb-4">
          <span
            className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider"
            style={{
              background: isDarkBackground 
                ? `linear-gradient(135deg, ${accentColor}30, ${gradients.secondary}30)`
                : `linear-gradient(135deg, ${accentColor}15, ${gradients.secondary}15)`,
              color: accentColor,
              border: `1px solid ${accentColor}50`,
              boxShadow: `0 2px 8px ${accentColor}20`,
            }}
          >
            {entity.type}
          </span>
        </div>
        
        {/* Title */}
        <h4
          className="font-bold text-xl mb-3 leading-tight group-hover:scale-[1.02] transition-transform duration-300"
          itemProp="name"
          style={{
            color: cardTextColor,
          }}
        >
          {entity.name}
        </h4>
        
        {/* Description */}
        {entity.description && (
          <p
            className="text-sm leading-relaxed mb-5 line-clamp-2"
            itemProp="description"
            style={{ 
              color: cardDescColor
            }}
          >
            {entity.description}
          </p>
        )}
        
        {/* Attributes */}
        {entity.attributes && Object.keys(entity.attributes).length > 0 && (
          <div className="mt-5 pt-4 border-t" style={{ borderColor: `${accentColor}30` }}>
            <div className="flex flex-wrap gap-2">
              {Object.entries(entity.attributes)
                .slice(0, 3)
                .map(([key, value]) => (
                  <span
                    key={key}
                    className="text-xs px-2.5 py-1 rounded-md font-medium"
                    style={{
                      background: isDarkBackground
                        ? `linear-gradient(135deg, ${accentColor}30, ${gradients.secondary}30)`
                        : `linear-gradient(135deg, ${accentColor}12, ${gradients.secondary}12)`,
                      color: accentColor,
                      border: `1px solid ${accentColor}40`,
                    }}
                  >
                    {key}: {value}
                  </span>
                ))}
            </div>
          </div>
        )}
        
        {/* Link Indicator */}
        {entity.link && (
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300" style={{ color: accentColor }}>
            <span>Explore</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (entity.link) {
    return (
      <Link href={entity.link} className="block hover:no-underline">
        {content}
      </Link>
    );
  }

  return content;
}

// Entity List Item Component
function EntityListItem({
  entity,
  accentColor,
  textColor,
}: {
  entity: Entity;
  accentColor: string;
  textColor?: string;
}) {
  const typeIcons: Record<Entity['type'], string> = {
    service: '🔧',
    location: '📍',
    industry: '🏢',
    person: '👤',
    organization: '🏛️',
    concept: '💡',
  };

  const content = (
    <div
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
      itemScope
      itemType={`https://schema.org/${getSchemaType(entity.type)}`}
    >
      <span
        className="flex items-center justify-center w-10 h-10 rounded-lg"
        style={{ backgroundColor: `${accentColor}15` }}
      >
        {typeIcons[entity.type]}
      </span>
      <div className="flex-1 min-w-0">
        <span
          className="font-medium group-hover:text-blue-600 transition-colors truncate block"
          itemProp="name"
          style={{ color: textColor || '#111827' }}
        >
          {entity.name}
        </span>
        {entity.description && (
          <span
            className="text-sm truncate block"
            itemProp="description"
            style={{ color: textColor ? `${textColor}99` : '#6B7280' }}
          >
            {entity.description}
          </span>
        )}
      </div>
      {entity.link && (
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </div>
  );

  if (entity.link) {
    return (
      <Link href={entity.link} className="block hover:no-underline">
        {content}
      </Link>
    );
  }

  return content;
}

export default EntityRelationship;
