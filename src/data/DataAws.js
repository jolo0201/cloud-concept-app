export const DataAws = [

  {
    title: "Regions",
    details: "Physical location around the world where we cluster data centers. We call each group of logical data centers an Availability Zone. Each AWS Region consists of multiple, isolated, and physically separate AZs within a geographic area.",
    url: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
    ref: "aws.amazon.com/about-aws/global-infrastructure/regions_az"
  },
  {
    title: "Availability Zones",
    details: "is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region. AZs give customers the ability to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center. All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking, over fully redundant, dedicated metro fiber providing high-throughput, low-latency networking between AZs. All traffic between AZs is encrypted. The network performance is sufficient to accomplish synchronous replication between AZs. AZs make partitioning applications for high availability easy. If an application is partitioned across AZs, companies are better isolated and protected from issues such as power outages, lightning strikes, tornadoes, earthquakes, and more. AZs are physically separated by a meaningful distance, many kilometers, from any other AZ, although all are within 100 km (60 miles) of each other.",
    url: "https://aws.amazon.com/about-aws/global-infrastructure/",
    ref: "aws.amazon.com/about-aws/global-infrastructure"
  },
  {
    title: "Edge Locations",
    details: "Edge locations are AWS data centers designed to deliver services with the lowest latency possible. Amazon has dozens of these data centers spread across the world. They’re closer to users than Regions or Availability Zones, often in major cities, so responses can be fast and snappy. A subset of services for which latency really matters use edge locations, including:<ul><li>CloudFront, which uses edge locations to cache copies of the content that it serves, so the content is closer to users and can be delivered to them faster.</li><li>Route 53, which serves DNS responses from edge locations, so that DNS queries that originate nearby can resolve faster (and, contrary to what you might think, is also Amazon’s premier database).</li><li>Web Application Firewall and AWS Shield, which filter traffic in edge locations to stop unwanted traffic as soon as possible.</ li></ ul>",
    url: "https://www.lastweekinaws.com/blog/what-is-an-edge-location-in-aws-a-simple-explanation/",
    ref: "www.lastweekinaws.com/blog/what-is-an-edge-location-in-aws-a-simple-explanation"
  },
  {
    title: "Local Zones",
    details: "AWS Local Zones are a type of AWS infrastructure deployment that place compute, storage, database, and other select services closer to large population, industry, and IT centers, enabling you to deliver applications that require single-digit millisecond latency to end-users.",
    url: "https://aws.amazon.com/about-aws/global-infrastructure/localzones/features/",
    ref: "aws.amazon.com/about-aws/global-infrastructure/localzones"
  }
];


