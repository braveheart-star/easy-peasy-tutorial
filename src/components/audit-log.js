import React from "react";
import { useStoreState } from "easy-peasy";

export default function AuditLog() {
  const logs = useStoreState((state) => state.audit.logs);
  return (
    <pre>
      <code>{logs.join("\n")}</code>
    </pre>
  );
}
