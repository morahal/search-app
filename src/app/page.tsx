'use client';

import React from 'react';
import { useState } from 'react';
import Articles from '@/data/articles.json';

type Article = {
  id: number;
  title: string;
  date: string;
  content: string;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const articles: Article[] = Articles;

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const highlightText = (text: string, term: string) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, 'gi');

    return text.split(regex).map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <mark key={index} className="bg-yellow-300">
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="lg:w-3/4 lg:pr-8">
        <h1 className="text-2xl font-bold mb-4">Search</h1>
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <p className="mb-4">{filteredArticles.length} posts found.</p>

        {filteredArticles.map((article) => (
          <div key={article.id} className="mb-6">
            <h2 className="text-xl font-semibold">
              {highlightText(article.title, searchTerm)}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              <em>{article.date}</em>
            </p>
            <p>{highlightText(article.content, searchTerm)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
