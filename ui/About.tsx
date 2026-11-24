import Image from 'next/image';
import me from '@/public/me_wide.jpg';

export default function About() {
  return (
    <section id='about' className='scroll-mt-24'>
      <h2 className='text-sm font-semibold tracking-widest text-emerald-400 uppercase'>
        About
      </h2>
      {/*
        Kept at its native 16:9 rather than cropped square: a tight crop makes
        the hand and pastry the subject, where the wide frame reads as a candid
        environmental portrait. Framed like the site's cards so it belongs.
        priority because this is the first section, so it is the LCP element.
      */}
      <div className='mt-6 overflow-hidden rounded-xl ring-1 ring-white/10'>
        <Image
          src={me}
          alt='Ahmed H. Ismail on a city street, looking at the camera'
          placeholder='blur'
          priority
          sizes='(min-width: 1152px) 704px, (min-width: 768px) 62vw, 100vw'
          className='h-auto w-full'
        />
      </div>
      <div className='mt-6 space-y-4 leading-relaxed text-slate-300'>
        <p>
          I’m Ahmed, a product-minded senior full-stack engineer and technical
          lead with over a decade of owning complex features end to end, across
          modern web products and high-throughput services. I’m based in Porto
          and engage internationally through my B2B LLC, with reliable overlap
          for EU and US time zones.
        </p>
        <p>
          I’ve led engineering teams of up to five, owning architecture, hiring
          and delivery, and bootstrapped an engineering department from scratch
          — CI/CD, testing standards, and the processes a growing team runs on.
          Lately that has meant real-time and AI-powered products in React,
          Next.js, Node.js and NestJS, with Dify workflows and knowledge bases
          in production, and LangChain and LangGraph, shipped with sensible
          guardrails.
        </p>
        <p>
          On the data side: custom search relevance in Elasticsearch,
          high-throughput messaging with Kafka and Redis Streams, advanced
          modeling in Postgres and TimescaleDB, and Python pipelines for data
          engineering, cleanup and reporting. I tune SQL, navigate traces and
          profile hot paths, adding caching and purpose-built indexes where they
          earn their keep — and I hold SSE and WebSocket interfaces to strict
          p95 targets, verified through load testing and monitored in
          production.
        </p>
        <p>
          I run Kubernetes with GitOps via FluxCD, in the cloud and on bare
          metal: servers set up with Ansible, Talos Linux nodes created with
          OpenTofu, Cilium networking with default-deny policies, and secrets
          encrypted in Git with SOPS. In the cloud I describe infrastructure in
          Pulumi and Terraform. I back it all with comprehensive automated
          testing and deep observability through OpenTelemetry, Prometheus,
          Grafana, Mimir, Loki, Tempo, Jaeger and Sentry. PostHog covers usage
          analytics, A/B testing, feature flags and gradual rollouts, so
          decisions are driven by data rather than opinion.
        </p>
        <p>
          I’m security-minded by habit — input validation, authorization
          boundaries, sensible rate limits, secret rotation and OWASP best
          practices — and I have led ISO 27001 compliance work and shipped
          payment systems under Central Bank of Egypt regulation. I also have
          on-chain experience across Ethereum, Polygon, Aptos and Tari, mostly
          with ethers.js and viem, and have worked professionally in C++, Python
          and Ruby. I prefer small PRs, trunk-based development, strong tests
          and clear SLOs.
        </p>
      </div>
    </section>
  );
}
