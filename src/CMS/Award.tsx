import CMSListItem from "@/components/CMSListItem";
import { awards } from "../data/awards";
import React from "react";

type Props = {
  En?: boolean;
};

const Award = ({ En = false }: Props) => {
  return <CMSListItem items={awards} isEnglish={En} />;
};

export default Award;