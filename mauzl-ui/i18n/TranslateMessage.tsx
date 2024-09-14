"use client";

import { Trans, useTranslation } from "react-i18next";

interface ITranslateMessageProps {
  txKey: string;
  values?: Record<string, unknown>;
  components?:
    | Readonly<Record<string, React.ReactElement>>
    | readonly React.ReactElement[];
  count?: number;
  context?: string;
  defaults?: string;
  nameSpace?: string;
  shouldUnescape?: boolean;
}

const TranslateMessage: React.FC<ITranslateMessageProps> = ({
  txKey,
  ...props
}) => {
  const { t } = useTranslation();
  return <Trans i18nKey={txKey} t={t} {...props} />;
};

export default TranslateMessage;
