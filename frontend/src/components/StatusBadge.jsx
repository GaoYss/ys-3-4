const statusLabels = {
  active: '有效',
  expiring: '即将到期',
  expired: '已到期',
  archived: '已归档',
  borrowed: '借出中',
  returned: '已归还',
  overdue: '逾期未还',
}

export function StatusBadge({ status, wasOverdue }) {
  const displayStatus = status === 'returned' && wasOverdue ? 'returned-overdue' : status
  const label = status === 'returned' && wasOverdue ? '已归还(曾逾期)' : statusLabels[status] || status
  return <span className={`status status-${displayStatus}`}>{label}</span>
}
