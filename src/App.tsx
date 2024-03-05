import Button from "./components/Button";
import { colors } from "./styles/colors";

function App() {
  return (
    <div>
      <div className="p-4 flex gap-2 line">
        <Button
          className="text-white h-fit"
          color={colors.green300}
          size="xlarge"
        >
          Button
        </Button>
        <Button className="text-white" color={colors.green300} size="large">
          Button
        </Button>
        <Button className="text-white" color={colors.green300} size="medium">
          Button
        </Button>
        <Button className="text-white" color={colors.green300} size="small">
          Button
        </Button>
      </div>
      <div className="p-4 flex gap-2">
        <Button color={colors.green300} size="xlarge" variant="line">
          Button
        </Button>
        <Button color={colors.green300} size="large" variant="line">
          Button
        </Button>
        <Button color={colors.green300} size="medium" variant="line">
          Button
        </Button>
        <Button color={colors.green300} size="small" variant="line">
          Button
        </Button>
      </div>
      <div className="p-4 flex gap-2">
        <Button
          className="text-white h-fit"
          color={colors.green300}
          disabled
          size="xlarge"
        >
          Button
        </Button>
        <Button color={colors.green300} disabled size="xlarge" variant="line">
          Button
        </Button>
      </div>
    </div>
  );
}

export default App;
