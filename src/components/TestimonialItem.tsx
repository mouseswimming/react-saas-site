type TestimonialItemProps = {
  containerClassName?: string;
  item: {
    id: string;
    name: string;
    role: string;
    avatarUrl: string;
    comment: string;
  };
};

export const TestimonialItem = ({ item }: TestimonialItemProps) => {
  return (
    <div>
      <blockquote className="body-1 mb-8 text-p4">{item.comment}</blockquote>
      <div className="flex items-center max-xl:-mr-8">
        <div className="mr-4 size-20 shrink-0 rounded-full border-2 border-s2 p-1.5">
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h4 className="body-2 mb-0.5 text-p1">{item.name}</h4>
          <p className="small-compact uppercase text-s3">{item.role}</p>
        </div>
      </div>
    </div>
  );
};
