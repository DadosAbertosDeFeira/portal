import React, { memo } from "react";

import type { URLReferenceProps } from "./types";

export const URLReference = memo(function URLReference({
  url,
  ...props
}: URLReferenceProps) {
  const URLWithoutLastSlash = url.endsWith("/") ? url.slice(0, -1) : url;
  const { origin, pathname } = new URL(URLWithoutLastSlash);

  const paths = pathname !== "/" ? pathname.slice(1).split("/") : [];

  const lastPath = paths.at(-1) ?? "";

  const lastPathDot = lastPath.lastIndexOf(".");
  const lastPathIsFile = lastPathDot !== -1;

  const filename = lastPathIsFile && lastPath.slice(0, lastPathDot);

  if (filename) paths.splice(-1, 1, filename);

  const extension = lastPathIsFile && lastPath.slice(lastPathDot + 1);

  const subpaths = paths.reduce((result, current, index, array) => {
    const path = `${result} › ${current}`;
    if (index === array.length - 1) return path;
    return `${path} `;
  }, "");

  return (
    <cite className="text-xs not-italic text-blue-900 md:text-sm" {...props}>
      <span className="text-blue-900">{origin}</span>
      <span className="text-blue-900">{subpaths}</span>
      {extension && (
        <span className="mx-2 border border-solid border-gray-500 px-[2px] font-mono text-xs font-black uppercase text-gray-500">
          {extension}
        </span>
      )}
    </cite>
  );
});
