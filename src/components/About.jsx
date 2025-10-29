import React from 'react'

export default function About() {
  return (
    <div className="section">
      <div className="card p-8">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-zinc-300 leading-relaxed">
          I'm a Java Developer specializing in Spring Boot microservices, REST/GraphQL APIs,
          and event-driven systems. I enjoy building scalable services, tuning performance
          (HikariCP, caching), and automating data workflows with AWS & PySpark.
        </p>
      </div>
    </div>
  )
}
