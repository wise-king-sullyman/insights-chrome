// allow .svg imports in TSX? files
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '@ausuliv/frontend-components-pdf-generator' {
  export const DownloadButtonWrapper: React.ComponentType;
}
