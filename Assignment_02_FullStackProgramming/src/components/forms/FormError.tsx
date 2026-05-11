export default function FormError({ message }: { message?: string }) {
  return (
    <p className={`error-message ${message ? "show" : ""}`}>
      {message ?? ""}
    </p>
  );
}
