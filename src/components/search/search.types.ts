export interface RMSearchBarProps {
  onPressSearch(): void;
  onChangeText(value: string): void;
  value: string;
}
