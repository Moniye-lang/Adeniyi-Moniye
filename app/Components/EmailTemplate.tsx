// app/Components/EmailTemplate.tsx
export const EmailTemplate = ({ name, email, message }: any) => (
  <div>
    <h1>New Message from {name}</h1>
    <p><strong>Email:</strong> {email}</p>
    <p>{message}</p>
  </div>
);