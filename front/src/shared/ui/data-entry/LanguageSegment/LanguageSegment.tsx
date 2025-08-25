import { FC } from 'react';
import { Segmented } from 'antd';

export interface ILanguageSegmentProps {
  selectedSegmentLanguage: string;
  setSelectedSegmentLanguage: (newLanguage: string) => void;
  className?: string;
}

export const LanguageSegment: FC<ILanguageSegmentProps> = ({
  selectedSegmentLanguage,
  setSelectedSegmentLanguage,
  ...props
}) => {
  return (
    <Segmented
      options={[
        { label: 'Кыргызча', value: 'ky' },
        { label: 'Русский', value: 'ru' },
        { label: 'English', value: 'en' },
      ]}
      onChange={setSelectedSegmentLanguage}
      value={selectedSegmentLanguage}
      {...props}
    />
  );
};
