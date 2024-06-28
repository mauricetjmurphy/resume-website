data "aws_acm_certificate" "certificate" {
  domain   = local.acm_certificate
  statuses = ["ISSUED"]
}

data "aws_route53_zone" "hosted_zone" {
  name         = local.acm_certificate
  private_zone = false
}

