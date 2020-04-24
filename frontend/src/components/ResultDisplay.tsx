import React, { useState, useEffect } from "react";

function ResultDisplay() {
  let [result, setResult] = useState({});

  useEffect(() => {
    let url =
      "https://ven03019.service-now.com/api/x_nuvo_sinc_modern/sinc_modern_es_examples/promises";

    fetch(url)
      .then(response => response.json())
      .then(r => {
        setResult(r.result);
      });
  }, []);

  return (
    <React.Fragment>
      {Object.values(result).map((v, i) => (
        <div key={i}>{v as any}</div>
      ))}
    </React.Fragment>
  );
  // return (<div></div>)
}

export default ResultDisplay;
