'use client';

import { createContext, useState, useContext, useEffect } from 'react';
import { ArticleType } from '../types/Article';

type BookmarksProviderProps = {
  children: React.ReactNode;
};

type BookmarksContextType = {
  bookmarks: ArticleType[];
  handleAddToBookmarks: (article: ArticleType) => void;
  handleRemoveBookmark: (articleUrl: string | undefined) => void;
};

export const BookmarksContext = createContext<BookmarksContextType | null>(
  null
);

export const BookmarksProvider: React.FC<BookmarksProviderProps> = ({
  children,
}) => {
  const [bookmarks, setBookmarks] = useState<ArticleType[]>([]);

  const handleAddToBookmarks = (article: ArticleType) => {
    setBookmarks([...bookmarks, { ...article, bookmarked: true }]);
  };

  const handleRemoveBookmark = (articleUrl: string | undefined) => {
    const filteredBookmarks = bookmarks.filter(
      (bookmark) => bookmark.url !== articleUrl
    );
    setBookmarks([...filteredBookmarks]);
  };

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, handleAddToBookmarks, handleRemoveBookmark }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
