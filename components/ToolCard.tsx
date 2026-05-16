'use client';

import { Tool } from '@/types/tool';
import { ExternalLink, Clock, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ToolCardProps {
  tool: Tool;
  index: number;
}

const ToolCard = ({ tool, index }: ToolCardProps) => {
  const isReleased = tool.status === 'released';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="h-full"
    >
      <div
        className={`relative bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100 ${
          isReleased ? 'hover:shadow-xl' : 'opacity-95'
        }`}
      >
        <div className="relative p-8 lg:p-10 flex flex-col flex-1">
          {/* Header with Icon and Status */}
          <div className="flex items-start justify-between mb-6">
            {tool.logo ? (
              <div className="w-12 h-12 relative">
                <Image
                  src={tool.logo}
                  alt={`${tool.title} ロゴ`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            ) : (
              <span className="text-4xl">{tool.icon}</span>
            )}
            {isReleased ? (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                公開中
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-600">
                <Clock size={10} className="mr-1" />
                Coming Soon
              </span>
            )}
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {tool.title}
          </h3>
          <p className="text-gray-600 text-base mb-5">{tool.description}</p>

          {/* Long description */}
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            {tool.longDescription}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {tool.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-gray-700"
              >
                <Check
                  size={16}
                  className="text-blue-500 mt-0.5 shrink-0"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-auto pt-4 border-t border-gray-200">
            {isReleased ? (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/link"
              >
                <span className="mr-1.5">ツールを使ってみる</span>
                <ExternalLink
                  size={14}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </a>
            ) : (
              <div className="text-sm text-gray-500">
                公開予定：{tool.releaseDate}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ToolCard;
