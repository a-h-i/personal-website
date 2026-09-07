// Single source of truth for the CV link. The version is a hash of the PDF's
// contents, computed in next.config.ts and inlined at build time, so the URL
// changes whenever the file does and caches cannot serve a stale copy.
//
// Note the leading slash: the links used to be relative ('Ahmed_Ismail_resume.pdf'),
// which resolved correctly only because every link sits on the root route.
export const RESUME_HREF = `/Ahmed_Ismail_resume.pdf?v=${
  process.env.NEXT_PUBLIC_RESUME_VERSION ?? 'dev'
}`;
