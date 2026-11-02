/** Lets other sections open a game box on the shelf by project title. */
export const OPEN_PROJECT_EVENT = "open-project";

export function openProject(title: string) {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.dispatchEvent(new CustomEvent(OPEN_PROJECT_EVENT, { detail: title }));
}
