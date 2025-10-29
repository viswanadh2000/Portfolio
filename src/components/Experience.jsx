import React from 'react'

const rows = [
  {
    company: 'USAA',
    role: 'Java Backend Developer (Team Lead)',
    period: 'Jun 2024 – Present',
    points: [
      'Led Spring Boot microservices; Kafka producers/consumers; OpenShift deployments',
      'Security with Spring Security, Conjur; Grafana/Kibana monitoring; SLO alerting',
      'Batch jobs to fix DQ in DB2; H2 for local testing; GitLab CI/CD',
    ],
  },
  {
    company: 'CITI',
    role: 'Java Backend Developer',
    period: 'Jul 2022 – Jan 2024',
    points: [
      'Architected secure banking APIs; OAuth2/JWT; role-based API portal',
      'Microservices with Spring Boot; Kafka; MongoDB/MySQL; GraphQL endpoints',
      'AWS Lambda pipelines; Jenkins/CodePipeline; Helm & Kubernetes deployments',
    ],
  },
  {
    company: 'American Express',
    role: 'Java Developer',
    period: 'Aug 2021 – Jul 2022',
    points: [
      'REST APIs for card issuance & rewards; Spring Security & JWT',
      'Kafka-based notifications; ELK logging; AWS (EC2, RDS, S3, Lambda)',
      'CI/CD with Jenkins; Swagger/OpenAPI docs; fraud rules',
    ],
  },
]

export default function Experience() {
  return (
    <div className="section">
      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="grid gap-6">
        {rows.map((r) => (
          <div key={r.company} className="card p-6">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="text-xl font-semibold">{r.company}</h3>
              <span className="text-sm text-zinc-400">{r.period}</span>
            </div>
            <p className="text-zinc-300">{r.role}</p>
            <ul className="mt-3 list-disc list-inside text-zinc-300 space-y-1">
              {r.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
