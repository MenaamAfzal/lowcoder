import { RecordConstructorToComp } from "lowcoder-core";
import { BoolControl } from "../../controls/boolControl";
import { LabelControl } from "../../controls/labelControl";
import { BoolCodeControl, StringControl } from "../../controls/codeControl";
import { ControlNode, Section, sectionNames } from "lowcoder-design";
import { SelectEventHandlerControl } from "../../controls/eventHandlerControl";
import { useContext } from "react";
import { stateComp } from "../../generators";
import { RefControl } from "comps/controls/refControl";
import { BaseSelectRef } from "rc-select";
import { refMethods } from "comps/generators/withMethodExposing";
import { blurMethod, focusMethod } from "comps/utils/methodUtils";
import { EditorContext } from "comps/editorState";
import { TourStepControl } from "@lowcoder-ee/comps/controls/tourStepControl";
import { booleanExposingStateControl } from "lowcoder-sdk";

export const TourChildrenMap = {
  label: LabelControl,
  placeholder: StringControl,
  disabled: BoolCodeControl,
  open: booleanExposingStateControl("open"),
  onEvent: SelectEventHandlerControl,
  options: TourStepControl,
  inputValue: stateComp<string>(""), // user's input value when search
  showSearch: BoolControl.DEFAULT_TRUE,
  viewRef: RefControl<BaseSelectRef>,
};

export const TourPropertyView = (
  children: RecordConstructorToComp<
    typeof TourChildrenMap & {
      hidden: typeof BoolCodeControl;
    }
  > //& {
    // style: { getPropertyView: () => ControlNode };
  // }
) => (
  <>
    <Section name={sectionNames.basic}>
      {children.options.propertyView({})}
    </Section>

    {/*{["layout", "both"].includes(*/}
    {/*  useContext(EditorContext).editorModeStatus*/}
    {/*) && (*/}
    {/*  <Section name={sectionNames.style}>*/}
    {/*    {children.style.getPropertyView()}*/}
    {/*  </Section>*/}
    {/*)}*/}
  </>
);

export const baseSelectRefMethods = refMethods<BaseSelectRef>([
  focusMethod,
  blurMethod,
]);
