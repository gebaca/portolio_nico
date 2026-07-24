import { Button } from '../components/Button';

export default function Biography() {
  return (
    <div>
      <Button
        label='Click Me'
        onClick={() => alert('Button clicked!')}
        size='md'
        variant='primary'
      />
    </div>
  );
}
