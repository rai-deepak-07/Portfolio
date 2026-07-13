import { Download } from 'lucide-react';
import Button from '../../ui/Button';
import { cn } from '../../../utils/cn';
import { usePortfolio } from '../../../context/PortfolioContext';

export default function ResumeButton({ loading = false, className }) {
  const { state } = usePortfolio();
  const resumeDownloadUrl = state?.configuration?.website?.resume;

  return (
    <>
      {resumeDownloadUrl ? (
        <a
          href={resumeDownloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Button
            variant="secondary"
            size="md"
            loading={loading}
            leftIcon={<Download size={18} />}
            className={cn(className)}
          >
            Resume
          </Button>
        </a>
      ) : (
        <Button
          variant="secondary"
          size="md"
          loading={loading}
          leftIcon={<Download size={18} />}
          className={cn(className)}
          disabled
        >
          Resume
        </Button>
      )}
    </>
  );
}
