import { Terminal } from "containers";
import { ProjectHeader } from "components";

export default function HomePage() {
  return (
    <>
      <ProjectHeader
        title="Diogo Izele"
        description="Hello, my name is Diogo Izele, I'm a web developer and this is my portfolio."
        keywords="Diogo Izele Portfolio"
        url="https://diogoizele.com/"
      />
      <Terminal />
    </>
  );
}
