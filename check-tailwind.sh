#!/bin/bash
# Скрипт проверяет Tailwind-классы в src/app и src/components
# Выводит предупреждения, если класс используется в JSX/TSX, но не найден в output.css

INPUT_DIRS=("src/app" "src/components")
TAILWIND_CSS="./src/app/output.css"

echo "=== Проверка Tailwind классов ==="

for dir in "${INPUT_DIRS[@]}"; do
  echo "Сканируем директорию: $dir"
  # Находим все классы className=""
  grep -hoP 'className\s*=\s*["\x27][^"\x27]*["\x27]' $dir/**/*.{js,ts,jsx,tsx} | \
  sed -E 's/className\s*=\s*["\x27]//;s/["\x27]//g' | tr ' ' '\n' | sort -u | while read cls; do
    if ! grep -q "\.$cls" "$TAILWIND_CSS"; then
      echo "⚠ Класс '$cls' найден в JSX/TSX, но отсутствует в output.css"
    fi
  done
done

echo "=== Проверка завершена ==="
