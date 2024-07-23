import { formatDate } from "date-fns";

export interface ToDo {
  title: string;
  description: string;
  dueDate: Date | undefined;
  priority: number; // from 1 to 5, 5 being most important
  notes: string;
  checklist: string[];
  //status: "unsaved" | "saved";
}

export function createItem(): ToDo {
  const newItem: ToDo = {
    title: "Test",
    description: "Test",
    dueDate: new Date("2001-01-01"),
    priority: 3,
    notes: "More testing even than you thought.",
    checklist: ["Some item","Next item","Check me out"],
    //status: "unsaved" 
  }
  return newItem;
}

export function createCard(item: ToDo): HTMLDivElement {
  const card = document.createElement("div");
  card.classList.add("todo");

  const title = document.createElement("p");
  title.classList.add("title");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = item.description;

  const dueDate = document.createElement("p");
  dueDate.classList.add("due-date");
  if (item.dueDate == undefined) {
    dueDate.textContent = "";
  } else {
    dueDate.textContent = formatDate(item.dueDate, 'EEEE M/d/yyyy')
  }

  const priorityHead = document.createElement("p");
  priorityHead.classList.add("priority-head");
  priorityHead.textContent = "Priority: ";
  const priority = createPriorityDropdown();

  const notesHead = document.createElement("p");
  notesHead.classList.add("notes-head");
  notesHead.textContent = "Notes";
  const notes = document.createElement("p");
  notes.textContent = item.notes;
  const checklist = createChecklist(item.checklist);

  card.append(
    title,
    description,
    dueDate,
    priorityHead,
    priority,
    notesHead,
    notes,
    checklist
  );

  return card;
}

function createPriorityDropdown(): HTMLSelectElement {
  const list = document.createElement("select");
  const priorities = ["very low", "low", "moderate", "high", "very high"];
  for (let i = 0; i <= 4; i++) {
    const option = document.createElement("option");
    option.textContent = priorities[i];
    list.appendChild(option);
  }
  return list;
}

function createChecklist(array: string[]): HTMLUListElement {
  const list = document.createElement("ul");
  array.map((listitem) => {
    const li = document.createElement("li");
    li.textContent = listitem;
    list.appendChild(li);
  });
  return list;
}
