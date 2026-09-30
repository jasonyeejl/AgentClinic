'use client';

import { useEffect, useState } from 'react';

type Agent = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export default function DashboardPage() {
  const [agents, setAgents] = useState<Agent[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch('/api/agents')
      .then((res) => res.json())
      .then((data: Agent[]) => {
        if (!cancelled) {
          setAgents(data);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (agents === null) {
    return <p className="p-8">Loading…</p>;
  }

  if (agents.length === 0) {
    return <p className="p-8">No agents yet.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-semibold">Agents</h1>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2 pr-4">Name</th>
            <th className="py-2 pr-4">Email</th>
            <th className="py-2 pr-4">Created At</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id} className="border-b">
              <td className="py-2 pr-4">{agent.name}</td>
              <td className="py-2 pr-4">{agent.email}</td>
              <td className="py-2 pr-4">
                {new Date(agent.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
