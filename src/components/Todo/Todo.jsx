export default function Todo({ title, description, completed }) {
  return (
    <div className="p-4 m-2 rounded-xl bg-blue-200">
      <h4 className={completed ? "text-green-500" : ""}>{title}</h4>
      {!completed && <p>{description}</p>}
    </div>
  );
}
