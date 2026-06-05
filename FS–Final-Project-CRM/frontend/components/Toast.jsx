export default function Toast({ toast }) {
  if (!toast?.message) return null;

  return (
    <div className={`toast toast-${toast.type || 'success'}`}>
      <span>{toast.type === 'error' ? '⚠️' : '✅'}</span>
      <p>{toast.message}</p>
    </div>
  );
}
