import { useState } from "react";
import Button from "./components/Button";
import Divider from "./components/Divider";
import Input from "./components/Input";
import Popover from "./components/Popover";
import PopoverContent from "./components/Popover/popover-content";
import PopoverTrigger from "./components/Popover/popover-trigger";
import Skeleton from "./components/Skeleton";
import Tab from "./components/Tab";
import TabGroup from "./components/Tab/tab-group";
import TextArea from "./components/TextArea";
import TextField from "./components/TextField";
import { colors } from "./styles/colors";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });

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
      <div className="p-4 flex gap-2">
        <Input className="w-[320px]" placeholder="Text" size="large" />
        <Input className="w-[320px]" placeholder="Text" />
        <Input className="w-[320px]" placeholder="Text" size="small" />
      </div>
      <div className="p-4 flex gap-2">
        <Input className="w-[320px]" disabled placeholder="Text" size="large" />
        <Input className="w-[320px]" disabled placeholder="Text" />
        <Input className="w-[320px]" disabled placeholder="Text" size="small" />
      </div>
      <div className="p-4 flex gap-2">
        <Input className="w-[320px]" inValid placeholder="Text" size="large" />
        <Input className="w-[320px]" inValid placeholder="Text" />
        <Input className="w-[320px]" inValid placeholder="Text" size="small" />
      </div>
      <div className="p-4 flex gap-2">
        <TextField
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
          size="large"
        />
        <TextField
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
        />
        <TextField
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
          size="small"
        />
      </div>
      <div className="p-4 flex gap-2">
        <TextField
          hasError
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
          size="large"
        />
        <TextField
          hasError
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
        />
        <TextField
          hasError
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
          size="small"
        />
      </div>
      <div className="p-4 flex gap-2">
        <TextArea
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
        />
        <TextArea
          hasError
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
        />
        <TextArea
          disabled
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
        />
      </div>
      <div className="relative">
        <Popover
          isOpen={isOpen}
          placement="bottom"
          onOpenChange={(isOpen) => setIsOpen(isOpen)}
        >
          <PopoverTrigger>
            <Button color={colors.green300} size="xlarge" variant="line">
              Button
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className=" bg-slate-500 p-[10px]"> popover test</div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="p-4 flex gap-2">
        <Skeleton className="rounded-md" height={50} width={100} />
      </div>
      <Divider color="black" margin="10px" size="200px" />
      <div className="p-[10px]">
        <TabGroup activeColor="blue">
          <Tab
            active={activeTab.tab1}
            onClick={() =>
              setActiveTab({
                tab1: true,
                tab2: false,
                tab3: false,
              })
            }
          >
            Info1
          </Tab>
          <Tab
            active={activeTab.tab2}
            onClick={() =>
              setActiveTab({
                tab1: false,
                tab2: true,
                tab3: false,
              })
            }
          >
            Info2
          </Tab>
          <Tab
            active={activeTab.tab3}
            onClick={() =>
              setActiveTab({
                tab1: false,
                tab2: false,
                tab3: true,
              })
            }
          >
            Info33adwadwa
          </Tab>
        </TabGroup>
      </div>
      <div className="p-[10px]">
        <TabGroup activeColor="blue" type="box">
          <Tab
            active={activeTab.tab1}
            onClick={() =>
              setActiveTab({
                tab1: true,
                tab2: false,
                tab3: false,
              })
            }
          >
            Info1
          </Tab>
          <Tab
            active={activeTab.tab2}
            onClick={() =>
              setActiveTab({
                tab1: false,
                tab2: true,
                tab3: false,
              })
            }
          >
            Info2
          </Tab>
          <Tab
            active={activeTab.tab3}
            onClick={() =>
              setActiveTab({
                tab1: false,
                tab2: false,
                tab3: true,
              })
            }
          >
            Info33adwadwa
          </Tab>
        </TabGroup>
      </div>
    </div>
  );
}

export default App;
