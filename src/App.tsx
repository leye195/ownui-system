import { BottomSheet } from "@ownui-system/components/BottomSheet";
import { useState } from "react";
import { Button, colors } from ".";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Playground</h1>

      <div className="flex gap-2 line">
        <Button
          className="text-white"
          color={colors.green300}
          size="large"
          onClick={() => setIsOpen(true)}
        >
          Button
        </Button>
      </div>
      <br />
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
    </div>
  );
}

export default App;
