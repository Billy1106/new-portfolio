function useScroll() {
  const currentSection = ref("home");

  const scroll = (refName: string) => {
    if (refName === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(refName);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToNextSection = () => {
    const sections = [
      "home",
      "about",
      "skills",
      "project",
      "history",
      "contact",
    ];
    const currentIndex = sections.indexOf(currentSection.value);
    const nextIndex = (currentIndex + 1) % sections.length;
    currentSection.value = sections[nextIndex];

    if (nextIndex === 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const nextSectionElement = document.getElementById(sections[nextIndex]);
    nextSectionElement?.scrollIntoView({ behavior: "smooth" });
  };
  return { currentSection, scroll, scrollToNextSection };
}

export default useScroll;