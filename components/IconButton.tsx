import React from "react";
import { Pressable, PressableProps } from "react-native";
import Icon, { IconType } from "./Icon";

interface IconButtonProps extends PressableProps {
  icon_props: IconType;
}

const IconButton = ({ icon_props, ...props }: IconButtonProps) => {
  return (
    <Pressable {...props}>
      <Icon {...icon_props} />
    </Pressable>
  );
};

export default IconButton;
