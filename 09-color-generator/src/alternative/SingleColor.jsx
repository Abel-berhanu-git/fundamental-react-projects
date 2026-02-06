import { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;
  const [copied, setCopied] = useState(false);

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`color: ${color.hexString()} copied to clipboard`);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (error) {
        toast.error('failed to copy to clipboard');
      }
    } else {
      toast.error('clipboard access is not available');
    }
  };
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: color.hexString() }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='percent-value'>#{hex}</p>
      <button className='copy-check'>
        {copied ? (
          <FaCheck style={{ color: 'green' }} />
        ) : (
          <FaCopy className='copy copy-light' />
        )}
      </button>
    </article>
  );
};
export default SingleColor;
