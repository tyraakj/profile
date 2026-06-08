export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">System Architecture Flow</div>
      <div className="arch-flow-wrapper">
        
        {/* Animated Background Data Routes */}
        <div className="arch-routes-layer">
          <svg className="data-routes" width="100%" height="100%" preserveAspectRatio="none">
            {/* Base Wireframes */}
            <path d="M 0,30 L 1000,30" className="route-wire" vectorEffect="non-scaling-stroke" />
            <path d="M 0,60 L 1000,60" className="route-wire" vectorEffect="non-scaling-stroke" />
            <path d="M 0,90 L 1000,90" className="route-wire" vectorEffect="non-scaling-stroke" />
            
            {/* Animated Data Packets (using dasharray to simulate packets) */}
            <path d="M 0,30 L 1000,30" className="route-packet p1" vectorEffect="non-scaling-stroke" />
            <path d="M 0,60 L 1000,60" className="route-packet p2" vectorEffect="non-scaling-stroke" />
            <path d="M 0,90 L 1000,90" className="route-packet p3" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        <div className="arch-grid">
          <div className="arch-layer">
            <div className="layer-title">01. Client Edge</div>
            <div className="arch-node-group">
              <div className="arch-node">React & Next.js</div>
              <div className="arch-tags">
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>Vercel</span>
              </div>
            </div>
            <div className="arch-node-group">
              <div className="arch-node">React Native</div>
            </div>
          </div>

          <div className="arch-layer">
            <div className="layer-title">02. API Gateway</div>
            <div className="arch-node-group">
              <div className="arch-node">Spring Boot</div>
              <div className="arch-tags">
                <span>Java</span>
                <span>Spring Security</span>
              </div>
            </div>
            <div className="arch-node-group">
              <div className="arch-node">FastAPI</div>
              <div className="arch-tags">
                <span>Python</span>
              </div>
            </div>
          </div>

          <div className="arch-layer">
            <div className="layer-title">03. Event Broker & Infra</div>
            <div className="arch-node-group">
              <div className="arch-node highlight-node">Apache Kafka</div>
              <div className="arch-tags">
                <span>Docker</span>
                <span>Railway</span>
              </div>
            </div>
            <div className="arch-node-group">
              <div className="arch-node">Redis</div>
              <div className="arch-tags">
                <span>AWS S3</span>
              </div>
            </div>
          </div>

          <div className="arch-layer">
            <div className="layer-title">04. Compute & Storage</div>
            <div className="arch-node-group">
              <div className="arch-node">IBM watsonx.ai</div>
              <div className="arch-tags">
                <span>LangChain</span>
                <span>LangGraph</span>
                <span>FAISS</span>
              </div>
            </div>
            <div className="arch-node-group">
              <div className="arch-node">PostgreSQL / Neon</div>
              <div className="arch-tags">
                <span>SQL</span>
                <span>Supabase</span>
              </div>
            </div>
            <div className="arch-node-group">
              <div className="arch-node web3-node">Base L2 (Solidity)</div>
              <div className="arch-tags">
                <span>ethers.js</span>
                <span>OpenZeppelin</span>
                <span>ERC-3009</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
