"use client";

import React, { useEffect, useRef } from "react";
import Graph from "graphology";
import Sigma from "sigma";

const GraphRenderer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sigmaRef = useRef<Sigma | null>(null);

  // Function to generate random nodes and edges
  const generateGraph = (graph: Graph, numNodes: number, numEdges: number) => {
    // Create random nodes
    for (let i = 0; i < numNodes; i++) {
      graph.addNode(i.toString(), {
        label: `Node ${i}`,
        x: Math.random() * 100, // Random x position
        y: Math.random() * 100, // Random y position
        size: Math.random() * 10 + 1, // Random size between 1 and 10
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Random color
      });
    }

    // Create random edges
    for (let i = 0; i < numEdges; i++) {
      const source = Math.floor(Math.random() * numNodes).toString();
      const target = Math.floor(Math.random() * numNodes).toString();

      if (source !== target && !graph.hasEdge(source, target)) {
        graph.addEdge(source, target, {
          size: Math.random() * 5 + 1, // Random edge size
          color: "gray",
        });
      }
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const graph = new Graph();

      // Generate a large graph with 100 nodes and 150 edges
      generateGraph(graph, 100, 150);

      // Initialize Sigma.js renderer and store it in ref
      sigmaRef.current = new Sigma(graph, containerRef.current);
    }

    // Clean up the Sigma instance on component unmount
    return () => {
      if (sigmaRef.current) {
        sigmaRef.current.kill();
      }
    };
  }, []);

  return (
    <div>
      {/* <h1 className="text-center text-2xl mb-4">Large Dynamic Graph with Sigma.js</h1> */}
      {/* Container where Sigma.js will render */}
      <div ref={containerRef} id="container" style={{ height: "600px", width: "100%" }} />
    </div>
  );
};

export default GraphRenderer;
