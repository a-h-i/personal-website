export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-sm font-semibold tracking-widest text-emerald-400 uppercase">
        About
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-slate-300">
        <p>
          I’m Ahmed, a senior full-stack engineer and technical lead based in Porto.
          I build dependable back ends and crisp, accessible interfaces. My focus is
          developer experience, performance, and shipping real value.
        </p>
        <p>
          Lately I’ve led teams delivering AI features like streaming chat with retrieval
          and memory, and I previously designed high-throughput data pipelines and
          dashboards. My day-to-day toolbox: React and Next.js with TypeScript, Node and
          Nest on the server, Postgres or Timescale with Redis, plus Elasticsearch for
          fast search and Kafka for messaging. I run on Docker and AWS, use Kubernetes
          on EKS, automate infra with Pulumi, and ship via GitOps
          with FluxCD.
        </p>
        <p>
          I also have on-chain experience across Ethereum, Polygon, Aptos, and Tari —
          primarily with ethers.js and viem. I have also worked professionally with Rust, C++, Python and Ruby.
          I prefer small PRs, trunk-based development, strong
          tests, and clear SLOs. I work globally through my Portuguese LLC with solid
          overlap for EU and US teams.
        </p>
      </div>
    </section>
  );
}
