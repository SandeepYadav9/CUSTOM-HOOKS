
import useTasks from "../../hooks/use-Tasks";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { value: error, isLoading, loadingHandler, errorHandler } = useTasks();

  const enterTaskHandler = async (taskText) => {
    loadingHandler();
    errorHandler();
    try {
      const response = await fetch(
        "https://steady-observer-301416-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          body: JSON.stringify({ text: taskText }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      errorHandler(err.message || "Something went wrong!");
    }
    loadingHandler();
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
