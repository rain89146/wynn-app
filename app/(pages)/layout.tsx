import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-1 w-full flex-col relative gap-20">{children}</main>
  );
}
