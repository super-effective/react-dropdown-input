import DropDownInput from '@super-effective/react-dropdown-input';
import { useState } from 'react';

import styles from './Example.module.scss';

const Example = () => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>('test1');

  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push({ id: `test${i}`, content: <span>Test{i}</span> });
  }
  return (
    <div>
      <section>
        <h1>Default</h1>
        <DropDownInput
          dropDownClassName={styles.dropDown}
          options={options}
          selectedOptionId={selectedOptionId}
          onOptionSelected={setSelectedOptionId}
        />
      </section>
      <section>
        <h1>Fluid</h1>
        <DropDownInput
          options={options}
          selectedOptionId={selectedOptionId}
          onOptionSelected={setSelectedOptionId}
          fluid
        />
      </section>
      <section>
        <h1>Custom Icon</h1>
        <DropDownInput
          options={options}
          selectedOptionId={selectedOptionId}
          onOptionSelected={setSelectedOptionId}
          fluid
          toggleIcon={
            <span role="img" aria-label="expand">
              ❤️
            </span>
          }
        />
      </section>
      <section>
        <h1>Empty Selection</h1>
        <DropDownInput
          placeholder="Select an option..."
          options={options}
          onOptionSelected={setSelectedOptionId}
        />
      </section>
      <section>
        <h1>Browser</h1>
        <select>
          <option>Test 1</option>
          <option>Test 2</option>
          <option>Test 3</option>
          <option>Test 4</option>
          <option>Test 5</option>
        </select>
      </section>
    </div>
  );
};

export default Example;
