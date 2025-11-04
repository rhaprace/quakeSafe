import { AlertTriangle } from 'lucide-react';

interface EmergencyDisclaimerBoxProps {
  className?: string;
}

export const EmergencyDisclaimerBox: React.FC<EmergencyDisclaimerBoxProps> = ({
  className = '',
}) => {
  return (
    <div className={`bg-muted/30 border rounded-lg p-3 ${className}`}>
      <div className="flex gap-2">
        <AlertTriangle className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
        <div className="text-[11px] text-muted-foreground leading-relaxed">
          <p className="font-medium mb-1">Important Reminder</p>
          <p>
            Always call <span className="font-mono font-semibold text-foreground">911</span> first in emergencies.
            Verify these numbers before an emergency occurs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyDisclaimerBox;

