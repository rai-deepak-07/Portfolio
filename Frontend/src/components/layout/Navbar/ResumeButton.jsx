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
            size="sm"
            loading={loading}
            leftIcon={<Download size={16} />}
            className={cn("lg:h-11 lg:px-6", className)}
          >
            Resume
          </Button>
        </a>
      ) : (
        <Button
          variant="secondary"
          size="sm"
          loading={loading}
          leftIcon={<Download size={16} />}
          className={cn("lg:h-11 lg:px-6", className)}
          disabled
        >
          Resume
        </Button>
      )}
    </>
  );
}
