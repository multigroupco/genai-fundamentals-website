"use client"

import React, { createContext, useContext, useState } from 'react';
import useSWR from 'swr';

export interface Resource {
  name: string;
  link: string;
  description: string;
  lesson?: string;
  tags?: string;
}

interface ResourceContextType {
  resources: Resource[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

const ResourceContext = createContext<ResourceContextType | undefined>(undefined);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const ResourceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, error } = useSWR<Resource[]>("/resources.json", fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000, // 1 minute
  });

  const resources = data;
  const isLoading = !data && !error;
  const isError = !!error;

  return (
    <ResourceContext.Provider value={{ resources, isLoading, isError }}>
      {children}
    </ResourceContext.Provider>
  );
};

export const useResourceContext = () => {
  const context = useContext(ResourceContext);
  if (!context) {
    throw new Error('useResourceContext must be used within a ResourceProvider');
  }
  return context;
};
