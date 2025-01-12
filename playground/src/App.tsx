import {
  Input,
  TextField,
  Accordion,
  Button,
  colors,
  Drawer,
  TextArea,
  BottomSheet,
  SnackBar,
  useSnackBarContext,
} from "ownui-system";
import { useState } from "react";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { useContext } = useSnackBarContext();
  const { openSnackBar } = useContext();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Playground</h1>
      <br />
      <Input placeholder="Text" size="large" inValid />
      <br />
      <Input placeholder="Text" />
      <br />
      <Input placeholder="Text" size="small" />
      <br />
      <div>
        <Accordion defaultSelected="accordion1" variant="splitted">
          <Accordion.Item
            body={<div>body</div>}
            header={<div>header</div>}
            value={"accordion2"}
          />
          <Accordion.Item
            body={<div>body</div>}
            header={<div>header</div>}
            value={"accordion1"}
          />
        </Accordion>
      </div>
      <br />
      <div className="flex gap-2 line">
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
      <br />
      <div>
        <Button
          className="text-white h-fit"
          color={colors.green300}
          size="xlarge"
          onClick={() => setIsDrawerOpen(true)}
        >
          Open Drawer
        </Button>
        <Drawer
          allowCloseOnClickBackDrop
          isOpen={isDrawerOpen}
          placement="left"
          onOpenChange={(isOpen: boolean) => setIsDrawerOpen(isOpen)}
        >
          <Drawer.Content>
            <div className="p-10">Drawer Left</div>
          </Drawer.Content>
        </Drawer>
      </div>
      <br />
      <div className="p-4 flex gap-2">
        <TextField placeholder="TextField" label="label" size="large" />
        <TextField placeholder="TextField" label="label" size="medium" />
        <TextField placeholder="TextField" label="label" size="small" />
      </div>
      <br />
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
      <br />
      <div className="p-4 flex gap-2">
        <TextArea
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
        />
      </div>
      <div>
        <TextArea
          hasError
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
        />
      </div>
      <div>
        <TextArea
          disabled
          helpMessage="Enter your help text"
          label="Label"
          placeholder="Text"
        />
      </div>
      <Button
        className="text-white"
        color={colors.green300}
        size="large"
        onClick={() => setIsOpen(true)}
      >
        Button
      </Button>
      <BottomSheet
        isOpen={isOpen}
        onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
      >
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>{" "}
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
        <div>
          Tes temapmdpmwadmpwapmdwapmdwm pawdpmwadpm pawdpmawm ppmawdmpwapdm
          awmd aopd mamop wamd awopdamwpodm wopam pdmpwampd owam
        </div>
      </BottomSheet>
      <Button
        onClick={() =>
          openSnackBar("Default", {
            type: "success",
          })
        }
      >
        Open SnackBar
      </Button>
      <SnackBar />
    </div>
  );
}

export default App;
