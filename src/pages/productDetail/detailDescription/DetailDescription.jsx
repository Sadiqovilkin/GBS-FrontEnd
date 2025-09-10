import React from "react";
import "./DetailDescription.scss";
const DetailDescription = () => {
  return (
    <section id="detailDescription">
      <div className="container">
        <div className="descriptionSectionHeader">
            <h3>Detailed Description — SIVACON S8</h3>
            <p>The SIVACON 8PT is a modular low-voltage switchboard and motor control center designed for safe, reliable, and flexible power distribution. With a robust busbar system, compartmentalized design, and optimized airflow, it ensures stability under high loads. Modular (withdrawable or fixed) units enable easy maintenance with minimal downtime, while flexible installation options (top/bottom cable entry, front/rear access) add versatility. It offers IP20–IP54 protection, Form 2–4 separation, and supports up to 7400A and 150kA short-circuit withstand, fully certified to IEC standards. Suitable for industry, infrastructure, data centers, and marine applications, SIVACON 8PT delivers long-lasting, type-tested performance.</p>
        </div>
        <div className="descriptionTable">
          <div className="tableHeader">
            <span>Parameters</span>
            <span>Value</span>
          </div>
          <div className="tableBody">
            <p>
              <span>1</span> <span> Rated operating voltage (Ur)</span>
            </p>
            <span>{`<690 V`}</span>
          </div>
          <div className="tableBody">
            <p>
              <span>2</span> <span> Rated operating voltage (Ur)</span>
            </p>
            <span>{`1000 V`}</span>
          </div>
          <div className="tableBody">
            <p>
              <span>3</span> <span> Nominal impulse voltage (Uimp)</span>
            </p>
            <span>{`8 kV`}</span>
          </div>
          <div className="tableBody">
            <p>
              <span>4</span> <span>Rated current (In)</span>
            </p>
            <span>{`≤ 7400 A`}</span>
          </div>
          <div className="tableBody">
            <p>
              <span>5</span> <span>Short circuit current (Isc)</span>
            </p>
            <span>{`<690 V`}</span>
          </div>
          <div className="tableBody">
            <p>
              <span>6</span> <span>Nominal frequency</span>
            </p>
            <span>{`IP20 – IP54`}</span>
          </div>
          <div className="tableBody">
            <p>
              <span>7</span> <span>Degree of protection</span>
            </p>
            <span>{`<690 V`}</span>
          </div>
          <div className="tableBody">
            <p>
              <span>8</span> <span> Paint</span>
            </p>
            <span>{`RAL 7032`}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailDescription;
