import React from "react";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="flex w-full justify-center py-12">
      <h2 className="bracket-header text-primary font-display text-3xl md:text-5xl font-bold tracking-widest">
        {title}
      </h2>
    </div>
  );
};